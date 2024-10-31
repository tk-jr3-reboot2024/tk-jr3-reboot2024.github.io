import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

const Seiriken = () => {
	const eventTimesDay1=[610,660,710,760,810,860,910];
	const eventTimesDay2=[610,660,710,760,805,850,895];
	const eventTimesDay3=[610,660,710,760,810,860,910];
	const [timeUntilNextEvent, setTimeUntilNextEvent] = useState(null);
	const getEventTimes = () => {
		const now = new Date();
		const month = now.getMonth() + 1; // 0が1月なので+1
		const day = now.getDate();
		if (month === 11 && day === 1) {
		  return eventTimesDay1;
		} else if (month === 11 && day === 2) {
		  return eventTimesDay2;
		} else if (month === 11 && day === 3) {
		  return eventTimesDay3;
		} else {
		  return []; // 公演がない日
		}
	  };
	
	  useEffect(() => {
		const calculateTimeUntilNextEvent = () => {
		  const now = new Date();
		  const currentTimeInMinutes = now.getHours() * 60 + now.getMinutes();
		  const currentTimeInSeconds = now.getSeconds();
	
		  // 秒単位に変換
		  const totalCurrentTimeInSeconds = currentTimeInMinutes * 60 + currentTimeInSeconds;
	
		  const eventTimes = getEventTimes(); // 現在の日付に基づいて公演時刻を取得
	
		  // 公演開始時刻までの秒数を計算し、未来の時刻のみを取得
		  const futureEventTimes = eventTimes
			.map(eventTime => (eventTime * 60) - totalCurrentTimeInSeconds) // 分を秒に変換
			.filter(seconds => seconds > 0);
	
		  // 次の公演までの時間があればその秒数を設定
		  if (futureEventTimes.length > 0) {
			setTimeUntilNextEvent(Math.min(...futureEventTimes));
		  } else {
			setTimeUntilNextEvent(null); // 公演終了後はnull
		  }
		};
	
		calculateTimeUntilNextEvent();
		const timer = setInterval(calculateTimeUntilNextEvent, 1000); // 1秒ごとに更新
	
		return () => clearInterval(timer);
	  }, []); // 空の依存配列でコンポーネントがマウントされたときのみ実行
	
	  return (
		<Typography variant="body2" color="#fff" fontSize="20px" fontFamily="serif">
		  {timeUntilNextEvent !== null
			? `あと ${timeUntilNextEvent / 60 | 0} 分 ${timeUntilNextEvent % 60} 秒`
			: '本日の公演は終了しました'}
		</Typography>
	  );
};

export default Seiriken;
