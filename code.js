function mergesort(array) {
    if (array.length <= 1) {
        return array;
    }

    let width = 1;
    while (width < array.length) {
        for (let start = 0; start < array.length; start += width * 2) {
            // make indicies
            let mid = Math.min(start + width, array.length);
            let end = Math.min(start + width * 2, array.length);
            let left = start;
            let right = mid;

            // already sorted
            if (right >= end || array[mid-1] <= array[right]) {
                continue;
            }

            // merge halves (now in place)
            while (left < mid && right < end) {
                if (array[left] <= array[right]) {
                    left++;
                } else {
                    let val = array[right];
                    for (let i = right; i > left; i--) {
                        array[i] = array[i-1];
                    }
                    array[left] = val;
                    
                    left++;
                    mid++;
                    right++;
                }
            }
        }
        width *= 2;
    }
    return array;
}
