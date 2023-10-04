import { useState } from 'react'
import { Subject } from 'rxjs';
import { switchMap, debounceTime } from 'rxjs/operators';
import { Input, Div, P } from './StyledComponents';

const App = () => {
	const [streak, setStreak] = useState<string>('');

	// just take home exercise, but ideally we want to debounce and ignore api calls from previous onChange events
	const streakSubject = new Subject<string>();
	const streakResults$ = streakSubject.pipe(
		debounceTime(150),
		switchMap(input => {
			return post<{ streak: string }>('/api/streak', { input: input })
		})
	);
	streakResults$.subscribe(response => {
		setStreak(response.streak);
	});

	return (
		<Div>
			<h1>Streak Finder</h1>
			<Input onChange={(e) => streakSubject.next(e.target.value)} />
			<P>Longest Streak: {streak}</P>
			<P>Length: {streak.length > 0 ? streak.length : ''}</P>
		</Div>
	)
}

async function post<T>(url: string, payload: any): Promise<T> {
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(payload)
	});

	if (!response.ok) {
		throw new Error('Network response was not ok');
	}
	return response.json() as Promise<T>;
}

export default App
