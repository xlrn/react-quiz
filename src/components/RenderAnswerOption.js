import React from 'react';
import PropTypes from 'prop-types';

function renderAnswerOptions(key) {
	return (
		<AnswerOption
			key={key.content}
			answerContent={key.content}
			answerType={key.type}
			answer={props.answer}
			questionId={props.questionId}
			onAnswerSelected={props.onAnswerSelected}
		/>
	);
}