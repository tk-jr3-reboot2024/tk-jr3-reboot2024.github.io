import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Seiriken = () => {
	const eventTimesDay1=[610,660,710,760,810,860,910];
	const eventTimesDay2=[610,660,710,760,805,850,895];
	const eventTimesDay3=[610,660,710,760,810,860,910];
	const [timeUntilNextEvent, setTimeUntilNextEvent] = useState(null);
	const [nextEventStartTime, setNextEventStartTime] = useState(null);
	const [nextstart, setNextstart] = useState(null);
	const [distributing, setDistributing] = useState(false);
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
        .map(eventTime => ({
          minutes: eventTime,
          secondsUntilStart: (eventTime * 60) - totalCurrentTimeInSeconds
        }))
        .filter(event => event.secondsUntilStart > 0);

		const futureEventTimes2 = eventTimes
		.map(eventTime => ({
			minutes: eventTime,
			secondsUntilStart: (eventTime * 60) - totalCurrentTimeInSeconds
		}))
		.filter(event => event.secondsUntilStart > -20);
		
      if (futureEventTimes.length > 0) {
        const nextEvent = futureEventTimes.reduce((earliest, event) =>
          event.secondsUntilStart < earliest.secondsUntilStart ? event : earliest
        );
        setTimeUntilNextEvent(nextEvent.secondsUntilStart);
		const StartTime=futureEventTimes2.reduce((earliest,event) =>
			event.secondsUntilStart < earliest.secondsUntilStart ? event : earliest
		);

        // 次の公演の開始時刻を時:分形式で設定
		const nextEvent2=nextEvent.minutes+20;
        const hours = String(Math.floor(nextEvent2 / 60)).padStart(2, '0');
        const minutes = String(nextEvent2 % 60).padStart(2, '0');
        setNextEventStartTime(`${hours}時${minutes}分`);
		if(nextEvent.minutes!==StartTime.minutes){
			setDistributing(true);
			const nextStart2=StartTime.minutes+20;
			const hours2=String(Math.floor(nextStart2 / 60)).padStart(2, '0');
			const minutes2 = String(nextStart2 % 60).padStart(2, '0');
			setNextstart(`${hours2}時${minutes2}分`);
		} else{
			setDistributing(false);
		}
      } else {
        setTimeUntilNextEvent(null);
        setNextEventStartTime(null);
		setDistributing(false);
      }
		};
	
		calculateTimeUntilNextEvent();
		const timer = setInterval(calculateTimeUntilNextEvent, 1000); // 1秒ごとに更新
	
		return () => clearInterval(timer);
	  }, []); // 空の依存配列でコンポーネントがマウントされたときのみ実行
	
	  return (
		<div>
		<Box sx={{
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			gap: 2
		}}>
		<Typography variant="body2" color="#fff" fontSize="20px" fontFamily="serif">
		{distributing ? (
        <>
          配布中（{nextstart} まで）
        </>
      ) : timeUntilNextEvent !== null ? (
        <>
          あと {timeUntilNextEvent/ 60 | 0} 分 {timeUntilNextEvent % 60} 秒
		  <br />
		  ({nextEventStartTime}開始公演分)
        </>
		
      ) : (
        '本日の公演は終了しました'
      )}
		</Typography>
		<Typography variant="body2" color="#fff" fontSize="20px" fontFamily="serif">
			※整理券配布状況は受付にて確認してください
		</Typography>
		</Box>
		</div>
	  );
};

export default Seiriken;
