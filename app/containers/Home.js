import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getTweetList, resetTweetsState } from 'redux/actions/tweets';
import  { getUserList } from 'redux/actions/users';
import { getTweet } from 'redux/actions/tweet';

import SearchForm from 'components/SearchForm';
import UserList from 'components/UserList';
import TweetList from 'components/TweetList';
import Loading from 'components/Loading';

class Home extends Component {
	constructor() {
		super();

		this.handleSearch = this.handleSearch.bind( this );
		this.handleScroll = this.handleScroll.bind( this );
		this.handleTweetClick = this.handleTweetClick.bind( this );
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

	handleSearch( search ) {
		const { getTweetList, resetTweetsState, getUserList } = this.props;
		resetTweetsState();
		getTweetList( search );
		getUserList( search );
	}

	handleScroll() {
		const { getTweetList, tweetList } = this.props;
		const { isLoading, latestSearches, lastTweetId,
			lastSearch, moreTweetsToLoad } = tweetList;
		if ( isLoading || !moreTweetsToLoad ) return null;

    const scrolled = window.scrollY;
    const viewportHeight = window.innerHeight;
    const fullHeight = document.body.clientHeight;

    if (!(scrolled + viewportHeight + 300 >= fullHeight)) {
      return null;
    }

    return getTweetList( lastSearch, lastTweetId );
  }

	handleTweetClick( tweet ) {
		const { getTweet } = this.props;
		getTweet( null, tweet );
	}

	render () {
		const { tweetList, userList } = this.props;
		const userCheck = userList.isLoading || (userList.users.length === 0 && userList.error === '')
		const tweetCheck = tweetList.isLoading || (tweetList.tweets.length === 0 && tweetList.error === '')
		const checkLists = userCheck && tweetCheck;

		return (
			<section className="container home">
				<SearchForm
					onHandleSearch={ this.handleSearch }
					lastSearch={ tweetList.lastSearch }
					latestSearches={ tweetList.latestSearches }
					/>
				<div className="content">
					{ userList.isLoading && <Loading /> }
					{ !checkLists && <UserList userList={ userList.users } isLoading={ userList.isLoading }/> }
					{ !checkLists && <TweetList tweetList={ tweetList.tweets } isLoading={ tweetList.isLoading } onTweetClick={ this.handleTweetClick }/> }
				</div>
			</section>
		)
	}
}

Home.propTypes = {
	tweetList: PropTypes.shape({
		tweets: PropTypes.array,
		lastTweetId: PropTypes.string,
		lastSearch: PropTypes.string,
		latestSearches: PropTypes.array,
		moreTweetsToLoad: PropTypes.bool,
		isLoading: PropTypes.bool,
		error: PropTypes.string
	}).isRequired,
	userList: PropTypes.shape({
		users: PropTypes.array,
		isLoading: PropTypes.bool,
		error: PropTypes.string
	}).isRequired,
	getTweetList: PropTypes.func.isRequired,
	resetTweetsState: PropTypes.func.isRequired,
	getUserList: PropTypes.func.isRequired,
}

const mapStateToProps = ( state ) => {
	return {
		tweetList: state.tweetList,
		userList: state.userList,
	}
}

export default connect(
	mapStateToProps,
	{
		getTweetList,
		resetTweetsState,
		getUserList,
		getTweet,
	}
)( Home );
