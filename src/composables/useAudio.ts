import { onMounted } from 'vue'

export const useAudio = () => {

    const audio = new Audio()

    onMounted(() => {
        audio.volume = 1
    })

    const playSound = (file:string) => {
        audio.src = `/${file}`
        audio.play()
    }

    return { playSound }
}