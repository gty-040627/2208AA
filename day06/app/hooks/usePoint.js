import {reactive,onMounted,onBeforeMount, reactive} from "vue"

export default function usePointer(){
    let point = reactive({
        x:0,
        y:0,
    })
    const savePoint = (event)=>{
        console.log(event,'event');
        point.x = event.pageX
        point.Y = event.pageY
    }
    onMounted(()=>{
        window.addEventListener('click',savePoint)
    })
    onBeforeMount(()=>{
        window.removeEventListener('click',savePoint)
    })
    return point
}