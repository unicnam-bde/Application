import React from 'react';
import {Text,View, Image} from 'react-native';
import { Card, WhiteSpace, WingBlank } from '@ant-design/react-native';

export function CardArticle(props) {
    return(
        <View style={{ paddingTop: 30 }}>
        <WingBlank size="lg">
          <Card>
            <Card.Header
              title= {props.title}
              thumbStyle={{ width: 30, height: 30 }}
              thumb={props.image}
            >
            </Card.Header>
            <Card.Body>
              <View style={{ height: 42 }}>
                <Text style={{ marginLeft: 16 }}>{props.infos}</Text>
              </View>
            </Card.Body>
            <Card.Footer
              extra="En savoir plus"
            />
          </Card>
        </WingBlank>
      </View>
    );
} 