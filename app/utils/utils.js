const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec']

export function getDiffDate( date ) {
  const now = new Date().getTime();
  const tweetDate = new Date( date );
  const timeDiff = now - tweetDate.getTime();

  const diffSeconds = Math.ceil( timeDiff / 1000 );
  const diffMinutes = Math.ceil( timeDiff / 60 / 1000 );
  const diffHours = Math.ceil( timeDiff / 3600 / 1000 );

  if ( diffSeconds < 60 ) {
    return `${diffSeconds} sec`
  } else if ( diffMinutes < 60 ) {
    return `${diffMinutes} min`;
  } else if ( diffHours < 24 ) {
    return `${diffHours} hr`;
  }

  return `${tweetDate.getDate()} ${months[tweetDate.getMonth()]}`

}

export function formatNumber(num) {
  return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
