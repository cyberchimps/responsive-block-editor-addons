window.addEventListener('DOMContentLoaded', responsiveTimelineInit);
window.addEventListener('resize', responsiveTimelineInit);
window.addEventListener('scroll', responsiveTimelineInit);

const responsiveTimelines = document.querySelectorAll('.interface-interface-skeleton__content');

responsiveTimelines.forEach((timeline) => {
    timeline.addEventListener('scroll', responsiveTimelineInit);
});
// Callback function for all event listeners.
function responsiveTimelineInit() {
	const iframeEl = document.querySelector( `iframe[name='editor-canvas']` );
	let mainDiv;
	if ( iframeEl ) {
		mainDiv = iframeEl.contentDocument.querySelectorAll( '.responsive-timeline' );
	} else {
		mainDiv = document.querySelectorAll( '.responsive-timeline' );
	}

	const timeline = mainDiv;
	if ( timeline.length === 0 ) {
		return;
	}

	for ( const content of timeline ) {
		const lineInner = content.querySelector( '.responsive-timeline__line__inner' );
		const lineOuter = content.querySelector( '.responsive-timeline__line' );
		const iconClass = content.querySelectorAll( '.responsive-timeline__marker' );
		const timelineField = content.querySelector( '.responsive-timeline__field:nth-last-child(2)' );
		const cardLast = timelineField
			? timelineField
			: content.querySelector( '.block-editor-block-list__block:last-child' );
		const timelineStartIcon = iconClass[ 0 ];
		const timelineEndIcon = iconClass[ iconClass.length - 1 ];

		setTimeout( () => {
			lineOuter.style.top = timelineStartIcon?.offsetTop + 'px';
		}, 300 );
		const timelineCardHeight = cardLast?.offsetHeight;

		if ( content.classList.contains( 'responsive-timeline__arrow-center' ) ) {
			lineOuter.style.bottom = timelineEndIcon?.offsetTop + 'px';
		} else if ( content.classList.contains( 'responsive-timeline__arrow-top' ) ) {
			const topHeight = timelineCardHeight - timelineEndIcon?.offsetTop;
			lineOuter.style.bottom = topHeight + 'px';
		} else if ( content.classList.contains( 'responsive-timeline__arrow-bottom' ) ) {
			const bottomHeight = timelineCardHeight - timelineEndIcon?.offsetTop;
			lineOuter.style.bottom = bottomHeight + 'px';
		}

		const connectorHeight = 3 * iconClass[ 0 ]?.offsetHeight;

		const viewportHeight = document?.documentElement?.clientHeight;

		const viewportHeightHalf = viewportHeight / 2 + connectorHeight;

		const body = document.body;
		const html = document.documentElement;

		const height = Math.max(
			body.scrollHeight,
			body.offsetHeight,
			html.clientHeight,
			html.scrollHeight,
			html.offsetHeight
		);

		const timelineEndIconOffsetBottom = height - timelineEndIcon?.getBoundingClientRect()?.top;

		const totalTimelineLineHeight =
			height - timelineStartIcon?.getBoundingClientRect()?.top - timelineEndIconOffsetBottom;

		const startFlag =
			timelineStartIcon?.getBoundingClientRect()?.top +
			window?.scrollY -
			( window?.innerHeight - window?.innerHeight / 3 );

		if ( startFlag < document?.documentElement?.scrollTop ) {
			const tscrollPerc =
				( ( document?.documentElement?.scrollTop - startFlag ) / totalTimelineLineHeight ) * 100;
			const percHeight = ( totalTimelineLineHeight / 100 ) * tscrollPerc;

			if ( percHeight < totalTimelineLineHeight + 60 ) {
				lineInner.style.height = percHeight + 'px';
			}
		}

		// Icon bg color and icon color

		let timelineIconPos, timelineCardPos;
		let timelineIconTop, timelineCardTop;
		const timelineIcon = content.querySelectorAll( '.responsive-timeline__marker' );

		let animateBorder = content.querySelectorAll( '.responsive-timeline__field' );

		if ( animateBorder.length === 0 ) {
			animateBorder = content.querySelectorAll( '.responsive-timeline__animate-border' );
		}

		for ( let j = 0; j < timelineIcon.length; j++ ) {
			timelineIconPos = timelineIcon[ j ].lastElementChild.getBoundingClientRect().top + window.scrollY;
			timelineCardPos = animateBorder[ j ].lastElementChild.getBoundingClientRect().top + window.scrollY;

			timelineIconTop = timelineIconPos - document.documentElement.scrollTop;
			timelineCardTop = timelineCardPos - document.documentElement.scrollTop;

			if ( timelineCardTop < viewportHeightHalf ) {
				animateBorder[ j ].classList.remove( 'out-view' );
				animateBorder[ j ].classList.add( 'in-view' );
			} else {
				// Remove classes if element is below than half of viewport.
				animateBorder[ j ].classList.add( 'out-view' );
				animateBorder[ j ].classList.remove( 'in-view' );
			}

			if ( timelineIconTop < viewportHeightHalf ) {
				// Add classes if element is above than half of viewport.
				timelineIcon[ j ].classList.remove( 'responsive-timeline__out-view-icon' );
				timelineIcon[ j ].classList.add( 'responsive-timeline__in-view-icon' );
			} else {
				// Remove classes if element is below than half of viewport.
				timelineIcon[ j ].classList.add( 'responsive-timeline__out-view-icon' );
				timelineIcon[ j ].classList.remove( 'responsive-timeline__in-view-icon' );
			}
		}
	}
}
