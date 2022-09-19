// 1

let quick_Sort = (origArray) => {
	// debugger
	if (origArray.length <= 1) return origArray;
	
	let left = [], right = [], newArray = [];
	let pivot = origArray.pop();
	let length = origArray.length;

	for (let i = 0; i < length; i++) {
		if (origArray[i] <= pivot) {
			left.push(origArray[i]);
		} else {
			right.push(origArray[i]);
		}
	}

	return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
}

// console.log(quick_Sort([3, 0, 2, 5, -1, 4, 1 ]))


////////////////////////////////////////////////////////////////////////////////////////////////////////
// MergeSort
// 2


const quickSort = (arr, newArr = []) => {
	debugger;
	const a = [...arr];
	if (a.length < 2) return a;
	const pivotIndex = Math.floor(a.length / 2);
	const pivot = a[pivotIndex];
	const [left, right] = a;
	const [lo, hi] = a.reduce((acc, val, i) => {
		if (val < pivot || (val === pivot && i != pivotIndex)) {
			acc[0].push(val);
		} else if (val > pivot) {
			acc[1].push(val);
		}
		return acc;
	}, [[], []]);

	return [...quickSort(lo), pivot, ...quickSort(hi)];
}

// console.log(quickSort([1, 6, 1, 5, 3, 2, 1, 4]));


////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3
// HeapSort

const heapsort = arr => {
	const a = [...arr];
	let l = a.length;

	const heapify = (a, i) => {
		const left = 2 * i + 1;
		const right = 2 * i + 2;
		let max = i;
		if (left < l && a[left] > a[max]) max = left;
		if (right < l && a[right] > a[max]) max = right;
		if (max !== i) {
			[a[max], a[i]] = [a[i], a[max]];
			heapify(a, max);
		}
	};

	for (let i = Math.floor(l / 2); i >= 0; i -= 1) {
		heapify(a, i);
		for (i = a.length - 1; i > 0; i--) {
			[a[0], a[i]] = [a[i], a[0]];
			l--;
			heapify(a, 0);
		}
	}
	return a;
};

// console.log(heapsort([3, 0, 2, 5, -1, 4, 1]));

////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4

const insertion_Sort = (arr) => {
	debugger
	for (let i = 1; i < arr.length; i++) {
		let j = i - 1
		let temp = arr[i];
		console.log(temp)
		while (j >= 0 && arr[j] > temp) {
			arr[j + 1] = arr[j]
			j--
		}
		arr[j+1] = temp
	}
	return arr
}

// console.log(insertion_Sort([3, 0, 2, 5, -1, 4, 1]));


////////////////////////////////////////////////////////////////////////////////////////////////////////
// 5
// selectionSort

// const selection_Sort = (arr) => {
// 	return arr.sort((a, b) => b - a)
// }

const selectionSort = arr => {
	const a = [...arr];
	for (let i = 0; i < a.length; i++) {
		const min = a
		.slice(i + 1)
		.reduce((acc, val, j) => (val < a[acc] ? j + i + 1 : acc), i);
		if (min !== i) [a[i], a[min]] = [a[min], a[i]];
	}
	return a;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////
// 6
// shellSort

const shellSort = (arr) => {
	let increment = arr.length / 2;
	while (increment > 0) {
		for (i = increment; i < arr.length; i++) {
			let j = i;
			let temp = arr[i];

			while (j >= increment && arr[j-increment] > temp) {
				arr[j] = arr[j-increment];
				j = j - increment;
			}

			arr[j] = temp;
		}

		if (increment == 2) {
			increment = 1;
		} else {
			increment = parseInt(increment*5 / 11);
		}
	}
	return arr;
}

// console.log(shellSort([3, 0, 2, 5, -1, 4, 1]));

////////////////////////////////////////////////////////////////////////////////////////////////////////
// 7
// bubbleSort

function swap(arr, first_Index, second_Index){
	let temp = arr[first_Index];
	arr[first_Index] = arr[second_Index];
	arr[second_Index] = temp;
}

function bubble_Sort(arr) {

	let len = arr.length, i, j, stop;

	for (i=0; i < len; i++){
		for (j=0, stop=len-i; j < stop; j++){
			if (arr[j] > arr[j+1]){
				swap(arr, j, j+1);
			}
		}
	}

	return arr;
}


/// ES-6


const bubbleSort = arr => {
	let swapped = false;
	const a = [...arr];
	for (let i = 1; i < a.length - 1; i++) {
		swapped = false;
		for (let j = 0; j < a.length - i; j++) {
			if (a[j + 1] < a[j]) {
				[a[j], a[j + 1]] = [a[j + 1], a[j]];
				swapped = true;
			}
		}
		if (!swapped) return a;
	}
	return a;
};

// console.log(bubbleSort([2, 1, 4, 3]))


////////////////////////////////////////////////////////////////////////////////////////////////////////
// 8 
// Cocktail shaker sort


const cocktailSort = (arr) => {
	let is_Sorted = true;
	while (is_Sorted){
		for (let i = 0; i< arr.length - 1; i++){
			if (arr[i] > arr[i + 1]) {
				let temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i+1] = temp;
				is_Sorted = true;
			}
		}

		if (!is_Sorted) break;

		is_Sorted = false;

		for (let j = arr.length - 1; j > 0; j--){
			if (arr[j-1] > arr[j])
			{
				let temp = arr[j];
				arr[j] = arr[j - 1];
				arr[j - 1] = temp;
				is_Sorted = true;
			}
		}
	}

	return arr
}

// console.log(cocktailSort([4, 9, 0, 3, 1, 5]))

////////////////////////////////////////////////////////////////////////////////////////////////////////
// 9
// combSort

const combSort = (arr) => {
	function is_array_sorted(arr) {
		let sorted = true;
		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				sorted = false;
				break;
			}
		}
		return sorted;
	}

	let iteration_count = 0;
	let gap = arr.length - 2;
	let decrease_factor = 1.25;

  // Repeat iterations Until array is not sorted
  
  while (!is_array_sorted(arr)) 
  {
      // If not first gap  Calculate gap
      if (iteration_count > 0)
      	gap = (gap == 1) ? gap : Math.floor(gap / decrease_factor);

  // Set front and back elements and increment to a gap
  let front = 0;
  let back = gap;
  while (back <= arr.length - 1) 
  {
          // Swap the elements if they are not ordered

          if (arr[front] > arr[back])
          {
          	let temp = arr[front];
          	arr[front] = arr[back];
          	arr[back] = temp;
          }

          // Increment and re-run swapping

          front += 1;
          back += 1;
      }
      iteration_count += 1;
  }
  return arr;
}

// console.log(combSort([4,9,0,3,1,5]))

////////////////////////////////////////////////////////////////////////////////////////////////////////
// 10
// gnomeSort



const gnomeSort = (arr) => {
	function moveBack(i) {
		for( ; i > 0 && arr[i-1] > arr[i]; i--) {
			let t = arr[i];
			arr[i] = arr[i-1];
			arr[i-1] = t;
		}
	}
	for (let i = 1; i < arr.length; i++) {
		if (arr[i-1] > arr[i]) moveBack(i);
	}
	return arr;
}

// console.log(gnomeSort([3, 0, 2, 5, -1, 4, 1]))


////////////////////////////////////////////////////////////////////////////////////////////////////////
// 11


const countingSort = (arr, min, max) => {
	let i, z = 0, count = [];

	for (i = min; i <= max; i++) {
		count[i] = 0;
	}

	for (i=0; i < arr.length; i++) {
		count[arr[i]]++;
	}

	for (i = min; i <= max; i++) {
		while (count[i]-- > 0) {
			arr[z++] = i;
		}
	}
	return arr;
}

// console.log(countingSort([3, 0, 2, 5, 4, 1]));

////////////////////////////////////////////////////////////////////////////////////////////////////////
// 12
// flashSort 


const flash_sort = (arr) => {
	let max = 0, min = arr[0];
	let n = arr.length;
	let m = ~~(0.45 * n);
	let l = new Array(m);

	for (let i = 1; i < n; ++i) {
		if (arr[i] < min) {
			min = arr[i];
		}
		if (arr[i] > arr[max]) {
			max = i;
		}
	}

	if (min === arr[max]) {
		return arr;
	}

	let c1 = (m - 1) / (arr[max] - min);


	for (let k = 0; k < m; k++) {
		l[k] = 0;
	}
	for (let j = 0; j < n; ++j) {
		k = ~~(c1 * (arr[j] - min));
		++l[k];
	}

	for (let p = 1; p < m; ++p) {
		l[p] = l[p] + l[p - 1];
	}

	let hold = arr[max];
	arr[max] = arr[0];
	arr[0] = hold;

    //permutation
    let move = 0, t, flash;
    j = 0; 
    k = m - 1;

    while (move < (n - 1)) {
    	while (j > (l[k] - 1)) {
    		++j;
    		k = ~~(c1 * (arr[j] - min));
    	}
    	if (k < 0) break;
    	flash = arr[j];
    	while (j !== l[k]) {
    		k = ~~(c1 * (flash - min));
    		hold = arr[t = --l[k]];
    		arr[t] = flash;
    		flash = hold;
    		++move;
    	}
    }

    //insertion
    for (j = 1; j < n; j++) {
    	hold = arr[j];
    	i = j - 1;
    	while (i >= 0 && arr[i] > hold) {
    		arr[i + 1] = arr[i--];
    	}
    	arr[i + 1] = hold;
    }
    return arr;
}

// console.log(flash_sort([3, 0, 2, 5, -1, 4, 1]));

////////////////////////////////////////////////////////////////////////////////////////////////////////
// 13
// pancakeSort

function pancake_sort(arr) {
	for (let i = arr.length - 1; i >= 1; i--) {
        // find the index of the largest element not yet sorted
        let max_idx = 0;
        let max = arr[0];
        for (let j = 1; j <= i; j++) {
        	if (arr[j] > max) {
        		max = arr[j];
        		max_idx = j;
        	}
        }

        if (max_idx == i) continue; // element already in place

        let new_slice;

        // flip arr max element to index 0
        if (max_idx > 0) {
        	new_slice = arr.slice(0, max_idx+1).reverse();
        	for ( j = 0; j <= max_idx; j++) 
        		arr[j] = new_slice[j];
        }

        // then flip the max element to its place
        new_slice = arr.slice(0, i+1).reverse();
        for ( j = 0; j <= i; j++) 
        	arr[j] = new_slice[j];
    }
    return arr;
}

// console.log(pancake_sort([3, 0, 2, 5, -1, 4, 1]))


////////////////////////////////////////////////////////////////////////////////////////////////////////
// 14
// bogoSort

function Bogosort(arr){
	let isSorted = function(arr){
		for(let i = 1; i < arr.length; i++){
			if (arr[i-1] > arr[i]) {
				return false;
			}
		}
		return true;
	};

	function shuffle(arr){
		let count = arr.length, temp, index;

		while(count > 0){
			index = Math.floor(Math.random() * count);
			count--;

			temp = arr[count];
			arr[count] = arr[index];
			arr[index] = temp;
		}

		return arr;
	}

	function sort(arr){
		let sorted = false;
		while(!sorted){
			arr = shuffle(arr);
			sorted = isSorted(arr);
		}
		return arr;
	}

	return sort(arr);
}

// console.log(Bogosort([3, 0, 2, 5, -1, 4, 1]))

////////////////////////////////////////////////////////////////////////////////////////////////////////
// 15
// BucketSort


const bucketSort = (arr, size = 5) => {
	const min = Math.min(...arr);
	const max = Math.max(...arr);
	const buckets = Array.from(
		{ length: Math.floor((max - min) / size) + 1 },
		() => []
		);
	arr.forEach(val => {
		buckets[Math.floor((val - min) / size)].push(val);
	});
	return buckets.reduce((acc, b) => [...acc, ...b.sort((a, b) => a - b)], []);
}; 

// console.log(bucketSort([6, 3, 4, 1]));

////////////////////////////////////////////////////////////////////////////////////////////////////////
// 16


const orderBy = (arr, props, orders) => {
	return [...arr].sort((a, b) => 
		props.reduce((acc, prop, i) => {
			if (acc === 0) {
				const [p1, p2] =
				orders && orders[i] === 'desc'
				? [b[prop], a[prop]]
				: [a[prop], b[prop]];
				acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
			}
			return acc;
		}, 0)
		);
}

const users = [
{ name: 'fred', age: 48 },
{ name: 'barney', age: 36 },
{ name: 'fred', age: 40 },
];

// console.log(orderBy(users, ['name', 'age'], ['asc', 'desc']));
// console.log(orderBy(users, ['name', 'age']));

////////////////////////////////////////////////////////////////////////////////////////////////////////
// 17


const sortedLastIndexBy = (arr, n, fn) => {
	const isDescending = fn(arr[0]) > fn(arr[arr.length - 1]);
	const val = fn(n);
	const index = arr
	.map(fn)
	.reverse()
	.findIndex(el => (isDescending ? val <= el : val >= el));
	return index === -1 ? 0 : arr.length - index;
};

// console.log(sortedLastIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x));


////////////////////////////////////////////////////////////////////////////////////////////////////////
// 18

const orderWith = (arr, prop, order) => {
	const orderValues = order.reduce((acc, v, i) => {
		acc[v] = i;
		return acc;
	}, {});
	return [...arr].sort((a, b) => {
		if (orderValues[a[prop]] === undefined) return 1;
		if (orderValues[b[prop]] === undefined) return -1;
		return orderValues[a[prop]] - orderValues[b[prop]];
	});
};

const users_lan = [
{ name: 'fred', language: 'Javascript' },
{ name: 'barney', language: 'TypeScript' },
{ name: 'frannie', language: 'Javascript' },
{ name: 'anna', language: 'Java' },
{ name: 'jimmy' },
{ name: 'nicky', language: 'Python' },
];
// console.log(orderWith(users_lan, 'language', ['Javascript', 'TypeScript', 'Java']));

////////////////////////////////////////////////////////////////////////////////////////////////////////
// 19

const sortCharactersInString = str => {
	return [...str].sort((a, b) => a.localeCompare(b)).join('');

	// return [...str].sort().join("");
}

// console.log(sortCharactersInString('cabbage'));


////////////////////////////////////////////////////////////////////////////////////////////////////////
// 20

const sortedIndexBy = (arr, n, fn) => {
	const isDescending = fn(arr[0]) > fn(arr[arr.length - 1]);
	const val = fn(n);
	const index = arr.findIndex(el =>
		isDescending ? val >= fn(el) : val <= fn(el)
		);
	return index === -1 ? arr.length : index;
};

// console.log(sortedIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x));


////////////////////////////////////////////////////////////////////////////////////////////////////////
// 21

const binarySearch = (arr, item) => {
	let l = 0,
	r = arr.length - 1;
	while (l <= r) {
		const mid = Math.floor((l + r) / 2);
		const guess = arr[mid];
		if (guess === item) return mid;
		if (guess > item) r = mid - 1;
		else l = mid + 1;
	}
	return -1;
};

// console.log(binarySearch([1, 2, 3, 4, 5], 1));

// console.log(binarySearch([1, 2, 3, 4, 5], 5));

// console.log(binarySearch([1, 2, 3, 4, 5], 6));


////////////////////////////////////////////////////////////////////////////////////////////////////////
// 22

const sortedIndex = (arr, n) => {
	const isDescending = arr[0] > arr[arr.length - 1];
	const index = arr.findIndex(el => (isDescending ? n >= el : n <= el));
	return index === -1 ? arr.length : index;
};

// console.log(sortedIndex([5, 3, 2, 1], 4));
// console.log(sortedIndex([30, 50], 40));


////////////////////////////////////////////////////////////////////////////////////////////////////////
// 23

const sortedLastIndex = (arr, n) => {
	const isDescending = arr[0] > arr[arr.length - 1];
	const index = arr
	.reverse()
	.findIndex(el => (isDescending ? n <= el : n >= el));
	return index === -1 ? 0 : arr.length - index;
}; 

// console.log(sortedLastIndex([10, 20, 30, 30, 40], 30));


////////////////////////////////////////////////////////////////////////////////////////////////////////
// 24

const isSorted = arr => {
	if (arr.length <= 1) return 0;
	const direction = arr[1] - arr[0];
	for (let i = 2; i < arr.length; i++) {
		if ((arr[i] - arr[i - 1]) * direction < 0) return 0;
	}
	return Math.sign(direction);
};

// console.log(isSorted([0, 1, 2, 2]));

// console.log(isSorted([4, 3, 2]));

// console.log(isSorted([4, 3, 5]));

// console.log(isSorted([4]))