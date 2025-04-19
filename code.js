function mergesort(array) {
    if (array.length <= 1) {
        return array;
    }
    
    width = 1; // width of sub array
    while (width < array.length) {
        // break into many sub arrays and merge
        for (let start = 0; start < array.length; start += width * 2) {
            l = start;
            m = Math.min(start + width, array.length);
            r = Math.min(start + width * 2, array.length);

            // divide into two halves
            lh = array.slice(l, m);
            rh = array.slice(m, r);

            // init indexes for halves
            i = l;
            li = 0;
            ri = 0;

            // merge when non-empty
            while (li < lh.length && ri < rh.length) {
                if (lh[li] <= rh[ri]) {
                    array[i] = lh[li];
                    li++;
                } else {
                    array[i] = rh[ri];
                    ri++;
                }
                i++;
            }

            // merge remaining lh
            while (li < lh.length) {
                array[i] = lh[li];
                li++;
                i++;
            }

            // merge remaining rh
            while (ri < rh.length) {
                array[i] = rh[ri];
                ri++;
                i++;
            }
        }
        width *= 2;
    }
    return array;
}
