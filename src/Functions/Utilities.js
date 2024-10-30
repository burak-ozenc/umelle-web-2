import Isotope from "isotope-layout";
import Swiper from "swiper"
import {useLocation} from "react-router-dom";
import {useEffect, useRef} from "react";
import ReactPixel from "react-facebook-pixel";
import { createClient } from "contentful";

const pixelID = process.env.REACT_APP_FACEBOOK_PIXEL_ID

export const analyticsEvent = (event_name, value) => {
    if (pixelID) {
        if (event_name === 'page_view') {
            ReactPixel.pageView()
        } else {
            ReactPixel.track(event_name, value)
        }
    }

    return null;
}

export const getBlogPosts = async () => {
    try {
      const client = await createClient({
        space: `${process.env.REACT_APP_CONTENTFUL_SPACE_ID}`,
        accessToken: `${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`
      });
      const entries = await client.getEntries({
        locale: 'en-US' // default locale
      });
  
      const mappedPosts = entries.items.map((entry) => {
        return {
          id: entry.sys.id,
          name: entry.fields.name,
          description: entry.fields.description,
          category: entry.fields.category,
          blogType: entry.fields.blogType,
          tags: entry.fields.tags,
          img: entry.fields.img,
          content: entry.fields.content,
          title: entry.fields.title,
          author: entry.sys.createdBy.id, // assuming 'author' is a link to the user who created the post
          comments: entry.fields.comments,
          date: entry.fields.date,
        };
      });
  
      return mappedPosts;
    } catch (error) {
      console.log(`Error fetching blog posts ${error}`);
    }
  }

export const getCookie = (name) => {
    var cookieArr = document.cookie.split(";");
    for (var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");

        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if (name === cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }

    return null;
}

export const getParents = (elem) => {
    var parents = [];
    while (elem.parentNode && elem.parentNode.nodeName.toLowerCase() !== 'body') {
        elem = elem.parentNode;
        parents.push(elem);
    }
    return parents;
}

export const addZeroBeforeNumber = (number) => {
    return (number > 9) ? number : `0${number}`
}

export const initializeSwiper = (item, params) => {
    const swiper_el = new Swiper(item, params);
    swiper_el.init();
    return swiper_el;
}

export const initializeIsotop = (item) => {
    let filter_menu = item.closest(".grid-wrapper").querySelector(".filter-menu");

    const grid = new Isotope(item, {
        itemSelector: '.grid-item',
        layoutMode: 'masonry',
        percentPosition: true,
        stagger: 0,
        masonry: {
            columnWidth: '.grid-sizer',
        }
    })

    setTimeout(() => {
        grid.arrange({filter: `*`})
    }, 1000);

    filter_menu && filter_menu.querySelectorAll("li").forEach((el) => {
        el.querySelector("span").addEventListener("click", function (e) {
            let element = e.target,
                filtered_text = element.getAttribute("data-filter");

            filter_menu.querySelectorAll("li").forEach((elm) => elm.classList.remove("active"))
            element.closest("li").classList.add("active");
            grid.arrange({filter: filtered_text === "*" ? "*" : `.${filtered_text}`})
        })
    })

    return grid
}

export const InputField = (value) => {

    document.querySelectorAll(".quantity").forEach(item => {
        let num = value ? value : 0,
            el = item.querySelector(".qty-text"),
            plusBtn = item.querySelector(".qty-plus"),
            minusBtn = item.querySelector(".qty-minus");

        plusBtn.addEventListener("click", () => {
            num = num + 1;
            el.setAttribute("value", num);
        });

        minusBtn.addEventListener("click", () => {
            num = num > 0 ? num - 1 : 0;
            el.setAttribute("value", num)
        });

        el.setAttribute("value", num);
    })
}

export const sendEmail = async (data) => {
    const req = await fetch(`${process.env.REACT_APP_API_URL}/sendemail`, {
        method: 'post',
        headers: {"Content-Type": "application/json", "Ocp-Apim-Subscription-Key": "d43da0ebf77f4e2db7bd5d9b84c455bd"},
        body: JSON.stringify(data)
    }).then(res => res.json()).then(data => data)
    return await req
}

export const resetForm = (actions, recaptcha) => {
    if (actions) {
        actions.resetForm()
        actions.setStatus(true)
        actions.setSubmitting(false);
        setTimeout(() => actions.setStatus(false), 5000)
    }

    if (recaptcha) {
        recaptcha.current.reset();
        recaptcha.current.captcha.classList.remove("error");
    }
}

// Header Menu Position
export const SetHeaderMenuPos = () => {

    function setMegaMenuPos() {
        let menu = document.querySelectorAll(".megamenu");
        if (menu.length > 0) {

            menu.forEach(item => {
                let menuWidth = item.clientWidth,
                    menuLeftPos = item.getBoundingClientRect().left;

                if (menuLeftPos + menuWidth >= window.screen.width) {
                    item.style.left = `-${(menuLeftPos + menuWidth) - window.innerWidth + 25}px`;
                }
            })
        }
    }

    function setSimpleMenuPos() {
        let menu = document.querySelectorAll(".simple-dropdown-menu");

        if (typeof (menu) != 'undefined' && menu != null) {
            menu.forEach(item => {
                let pos = item.getBoundingClientRect().left,
                    posTop = item.getBoundingClientRect().top,
                    width = item.clientWidth,
                    height = item.clientHeight;

                if (pos + width + 10 > window.innerWidth) {
                    item.style.left = `${window.innerWidth - (pos + width + 10)}px`;
                    item.classList.add("menu-left");
                }

                if ((posTop + height) > window.innerHeight) {
                    item.style.transform = `translateY(${-(posTop + height - window.innerHeight)}px)`;
                }
            })
        }
    }

    setMegaMenuPos();
    setSimpleMenuPos();

    window.addEventListener('resize', (event) => {
        setTimeout(() => {
            setMegaMenuPos();
            setSimpleMenuPos();
        }, 500);
    });
}

export const setDocumentFullHeight = () => {
    const documentHeight = () => {
        const doc = document.documentElement
        doc.style.setProperty('--viewport-height', `${window.innerHeight}px`)
    }

    window.addEventListener("resize", documentHeight)
    documentHeight()
}


export const ScrollToAnchor = () => {
    const location = useLocation();
    const lastHash = useRef('');

    // listen to location change using useEffect with location as dependency
    // https://jasonwatmore.com/react-router-v6-listen-to-location-route-change-without-history-listen
    useEffect(() => {
        if (location.hash) {
            lastHash.current = location.hash.slice(1); // safe hash for further use after navigation
        }

        if (lastHash.current && document.getElementById(lastHash.current)) {
            setTimeout(() => {
                document
                    .getElementById(lastHash.current)
                    ?.scrollIntoView({behavior: 'smooth', block: 'start'});
                lastHash.current = '';
            }, 100);
        }
    }, [location]);

    return null;
}
