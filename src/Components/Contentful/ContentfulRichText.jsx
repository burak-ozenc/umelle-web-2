import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Dropcaps from "../Dropcaps/Dropcaps";

// Custom renderer for Contentful Rich Text with Dropcaps
const renderOptions = {
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children, i) => {
            if (node !== undefined && node !== null) {
                const contentText = node.content.map(item => item.value).join('');
                console.log('contentText', contentText)
                // Use Dropcaps for the first paragraph only
                if (i === 0) {
                    return (
                        <Dropcaps
                            className="mb-[15px]"
                            theme="dropcaps-style02"
                            content={contentText}
                        />
                    );
                }
                return <p>{contentText}</p>;
            }
        },
    },
};

// Component to render Contentful Rich Text with Dropcaps for the first paragraph
const ContentfulRichText = ( content ) => {
    // console.log('content',documentToReactComponents(content, renderOptions))
    // if (content !== undefined && content !== null)
    //     return <>{documentToReactComponents(content, renderOptions)}</>;
};

// Example of using ContentfulRichText in a component
const ContentfulRenderer = (data ) => {
    // console.log('ContentfulRenderer',data.content.content2)
    console.log('content',documentToReactComponents(data?.content?.content2, renderOptions))
    return(documentToReactComponents(data?.content?.content2, renderOptions))
    // return (
        // <div>
        //     <ContentfulRichText content={data?.content?.content2} />
        // </div>
    // );
};

export { ContentfulRenderer, ContentfulRichText };
