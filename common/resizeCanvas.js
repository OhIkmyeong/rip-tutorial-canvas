export function resize_canvas(){
    const $cv = document.getElementById('cv')
    const wid = $cv.offsetWidth;
    $cv.width = wid;
    $cv.height = wid;
}//resize_canvas