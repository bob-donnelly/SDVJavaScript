function element_replace() {

    let ele = Array(0, 1, 1, 0, 1);

    ele[ele.map((x, i) => [i, x]).filter(
    x => x[1] == 1)[0][0]] = 'x'

    ele[ele.map((x, i) => [i, x]).filter(
        x => x[1] == 1)[0][0]] = 'x'
        
        ele[ele.map((x, i) => [i, x]).filter(
            x => x[1] == 1)[0][0]] = 'x';

    console.log(ele);
}