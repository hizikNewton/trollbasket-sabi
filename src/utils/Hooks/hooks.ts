import { createBrowserHistory } from 'history'
import { useEffect, useRef } from 'react'


export const useRouter = (callback: Function) => {
    const history = createBrowserHistory()
    useEffect(() => {
      let currentUrl = `${history.location.pathname}${history.location.search}`
      const listen = history.listen((location: any) => {
        if (currentUrl !== `${location.pathname}${location.search}`) {
          callback()
        }
        currentUrl = `${location.pathname}${location.search}`
      })
      return () => {
        listen()
      }
    }, [callback, history])
  }

export const useRouterLocation = (callback: () => void) => {
    const history = createBrowserHistory()
    const savedCallback = useRef(() => {})
    useEffect(() => {
      savedCallback.current = callback
    })
    useEffect(() => {
      const currentCallback = () => {
        savedCallback.current()
      }
      const listen = history.listen(() => {
        currentCallback()
      })
      return () => {
        listen()
      }
    }, [history])
  }
