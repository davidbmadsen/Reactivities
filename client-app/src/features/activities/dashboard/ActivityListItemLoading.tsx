import React from "react";
import { Button, Placeholder, Segment, Item } from "semantic-ui-react";

export default function ActivityListItemLoading() {

    return (
        <Segment.Group>
            <Segment clearing >
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny'>
                            <Placeholder style={{ width: 80, height: 80, borderRadius: 40 }}>
                                <Placeholder.Image />
                            </Placeholder>
                        </Item.Image>
                        <Item.Content>
                            <Placeholder>
                                    <Placeholder.Line length='medium'/>
                                    <Placeholder.Line length='very short'/>
                            </Placeholder>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <Placeholder>
                    <Placeholder.Paragraph>
                        <Placeholder.Line />
                    </Placeholder.Paragraph>
                </Placeholder>
            </Segment>
            <Segment>
                <Placeholder>
                    <Placeholder.Paragraph>
                        <Placeholder.Line length='short' />
                        <Placeholder.Line length='medium' />
                    </Placeholder.Paragraph>
                </Placeholder>
            </Segment>
            <Segment clearing>
                <Placeholder.Line length='short' />
                <Button
                    floated='right' primary disabled content='View' />
            </Segment>

        </Segment.Group >)
}