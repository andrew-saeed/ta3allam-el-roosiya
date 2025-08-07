import { onMounted, ref } from 'vue'

export const useAudio = () => {

    const audio = new Audio()
    const isPlaying = ref(false)

    onMounted(() => {
        audio.volume = 1

        audio.addEventListener('play', () => {
            isPlaying.value = true
        })

        audio.addEventListener('ended', () => {
            isPlaying.value = false
        })
    })

    const playSound = (file:string) => {
        audio.src = `/${file}`
        audio.play()
    }

    return { playSound, isPlaying }
}