import React from 'react';

import {
    Card,
    CardImg,
    CardBlock,
    CardTitle,
    CardSubtitle,
    CardText,
} from '@bootstrap-styled/v4';

const COMPONENT_NAME = "TweetCard";

export default function TweetCard(props) {

    const { data } = props;
    //console.info(`[${COMPONENT_NAME}] data:`, data);

    if (!data) {
        return;
    }

    return (
        <Card width="100%" className='tweetCard'>
            <CardImg top src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBlock>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>{data.text}</CardText>
            </CardBlock>
        </Card>
    );
}