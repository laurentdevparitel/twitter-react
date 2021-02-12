import React from 'react';

import {
    Card,
    CardBlock,
    CardTitle,
    CardText, CardLink,
    Img, Col, Row, P,
    Strong, Badge
} from '@bootstrap-styled/v4';

import defaultAvatar from '../../images/avatar.png'

import {getTimeInterval} from '../../helpers/helpers';

const COMPONENT_NAME = "TweetCard";

export default function TweetCard(props) {

    const { data } = props;
    //console.info(`[${COMPONENT_NAME}] data:`, data);

    const renderFormatedUrls = (entities) => {
        //console.info(`[${COMPONENT_NAME}.renderFormatedUrls]`, entities);

        if (!entities || typeof entities.urls === "undefined"){
            return;
        }
        return entities.urls.map((url, index) => {
            let link = `${url.url}`;
            return <CardLink key={index} href={link}>{url.url}</CardLink>
        })
    }

    const renderFormatedHashTags = (entities) => {
        //console.info(`[${COMPONENT_NAME}.renderFormatedHashTags]`, entities);

        if (!entities || typeof entities.hashtags === "undefined"){
            return;
        }
        return entities.hashtags.map((hashtag, index) => {
            let link = `#${hashtag.tag}`;
            return <CardLink key={index} href={link}>#{hashtag.tag}</CardLink>
        })
    }

    const renderFormatedUserames = (entities) => {
        //console.info(`[${COMPONENT_NAME}.renderFormatedUserames]`, entities);

        if (!entities || typeof entities.mentions === "undefined"){
            return;
        }
        return entities.mentions.map((mention, index) => {
            return <Strong key={index}  className="twitterId">@{mention.username}</Strong>
        })
    }

    if (!data) {
        return;
    }

    return (
        <div className='tweetCard'>
            <Row>
                <Col lg="1" className="text-right">
                    <Img thumbnail alt="Card image cap" src={defaultAvatar} className="rounded avatar" />
                </Col>
                <Col lg="11">
                    <Card>
                        <CardBlock>
                            <CardTitle className="text-truncate"><Strong className="source">{data.source}</Strong> {renderFormatedUserames(data.entities)} <Badge className="timeInterval">{getTimeInterval(data.created_at)}</Badge></CardTitle>
                            {/*<CardSubtitle>Card subtitle</CardSubtitle>*/}
                            <CardText>{data.text}</CardText>
                            <P>
                                { renderFormatedUrls(data.entities) }
                            </P>
                            <P>
                                { renderFormatedHashTags(data.entities) }
                            </P>
                        </CardBlock>
                    </Card>
                </Col>
            </Row>

        </div>

    );
}