function mergesort(array) {
    if (array.length <= 1) {
        return array;
    }
    
    width = 1; // width of sub array
    while (width < array.length) {
        // break into many sub arrays and merge
        for (let i = 0; i < array.length; i += width * 2) {
            l = i;
            m = Math.min(i + width, array.length);
            r = Math.min(i + width * 2, array.length);
            merge(array, l, m, r);
        }
        width *= 2;
    }
    return array;
}

function merge(arr, l, m, r) {
    // divide into two halves
    lh = arr.slice(l, m);
    rh = arr.slice(m, r);

    // init indexes for halves
    i = l;
    li = 0;
    ri = 0;

    // merge when non-empty
    while (li < lh.length && ri < rh.length) {
        if (lh[li] <= rh[ri]) {
            arr[i] = lh[li];
            li++;
        } else {
            arr[i] = rh[ri];
            ri++;
        }
        i++;
    }

    // merge remaining lh
    while (li < lh.length) {
        arr[i] = lh[li];
        li++;
        i++;
    }

    // merge remaining rh
    while (ri < rh.length) {
        arr[i] = rh[ri];
        ri++;
        i++;
    }
}
