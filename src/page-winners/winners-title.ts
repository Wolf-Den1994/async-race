import { winners } from "./winners";

const mainTitleWinners = document.createElement('h2');
mainTitleWinners.className = 'main-winners-title';
mainTitleWinners.innerHTML = `Winners (COUNT)`
winners.append(mainTitleWinners)

const mainSubTitleWinners = document.createElement('h3');
mainSubTitleWinners.className = 'main-winners-subtitle';
mainSubTitleWinners.innerHTML = `Page #1`
winners.append(mainSubTitleWinners)
