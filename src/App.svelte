<script>
import {getPicture} from "./functions.js";
import {lessRating} from "./functions.js"
import {moreRating} from "./functions.js"
import {resetRating} from "./functions.js"
import {storeRatings} from "./functions.js"
import {getRandom} from "./functions.js"
import {getShowlist} from "./functions.js"
import {saveLinks} from "./functions.js"

$: url = "https://picsum.photos/200/300"

$: random = 0;
$: rating = 0;
$: ratingList = []
$: showList = []
$: linkList = []

</script>

<main>
	<div class="Main">
	<h1 id="heading">Randomize it!</h1>
	<div class="Front">

		<img src={url} alt="RandomPicture">
		<br>
		<button on:click={() => {random = getRandom(random)}} on:click={() => {ratingList = storeRatings(ratingList, rating, random)}} on:click={() => {showList = getShowlist(ratingList, rating, random, showList)}} on:click={() => {url = getPicture(url, rating, random)}} on:click={() => {rating = resetRating()}} on:click={() => {linkList = saveLinks(linkList, url)}}>New Picture</button>
	</div>
	<div class="Back">
		<button id="button2" on:click={() =>{rating = lessRating(rating)}}>-</button>
		<span id="ratings">Rating: {rating}/10</span>
		<button id="button2" on:click={() =>{rating = moreRating(rating)}}>+</button>
	</div>
	<div id="ratinglist">
		<h1>Ratings:</h1>
		{#each showList as diffrating, index}
			<a href={linkList[index]}>{Number(Object.keys(ratingList[index]))}</a>:
			{diffrating.photo} <br>
		{/each}
	</div>
</div>
</main>

<style>

</style>