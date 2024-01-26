import React, {memo, useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Page from 'src/components/page/Page';
import SwipeableFlatList from 'react-native-swipeable-list';
import {getTopHeadingData} from 'src/redux/actions/news';
import {NEWS} from 'src/redux/constants/news';
import styles from './styles';

const News = () => {
  const newsTopHeading = useSelector(
    state => state?.newsReducer?.newsTopHeading,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopHeadingData());
  }, []);

  function renderItem({item}) {
    if (item == null) {
      return null;
    }
    return (
      <View style={styles.item}>
        <Text>{item.title}</Text>
      </View>
    );
  }

  const deleteItem = itemTitle => {
    const updatedNewsTopHeading = newsTopHeading.filter(
      news => news.title !== itemTitle,
    );
    dispatch({type: NEWS.TOP_HEADING_SUCCESS, payload: updatedNewsTopHeading});
  };

  const onPressPin = itemTitle => {
    const updatedHeadlines = newsTopHeading.map(news =>
      news.title === itemTitle ? {...news, isPinned: true} : news,
    );
    dispatch({
      type: NEWS.TOP_HEADING_SUCCESS,
      payload: updatedHeadlines,
    });
  };

  const onPressUnpin = itemTitle => {
    const updatedHeadlines = newsTopHeading.map(news =>
      news.title === itemTitle ? {...news, isPinned: false} : news,
    );
    dispatch({
      type: NEWS.TOP_HEADING_SUCCESS,
      payload: updatedHeadlines,
    });
  };

  const QuickActions = (index, qaItem) => {
    return (
      <View style={styles.qaContainer} key={index}>
        <View style={[styles.button]}>
          <Pressable
            onPress={() =>
              qaItem.isPinned
                ? onPressUnpin(qaItem.title)
                : onPressPin(qaItem.title)
            }>
            <Text style={[styles.buttonText, styles.button1Text]}>
              {qaItem.isPinned ? 'UnPin' : 'Pin'}
            </Text>
          </Pressable>
        </View>
        <View style={[styles.button]}>
          <Pressable onPress={() => deleteItem(qaItem.title)}>
            <Text style={[styles.buttonText, styles.button3Text]}>Delete</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  const sortedHeadlines = [...newsTopHeading].sort((a, b) =>
    a.isPinned === b.isPinned ? 0 : a.isPinned ? -1 : 1,
  );

  return (
    <Page>
      <SwipeableFlatList
        data={sortedHeadlines}
        renderItem={renderItem}
        keyExtractor={item => item?.title?.toString()}
        showsVerticalScrollIndicator={false}
        shouldBounceOnMount={true}
        maxSwipeDistance={150}
        renderQuickActions={({index, item}) => QuickActions(index, item)}
      />
    </Page>
  );
};

export default memo(News);
