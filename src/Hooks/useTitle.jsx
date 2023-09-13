import { useEffect } from "react"

const useTitle = title => {
    useEffect((() => {
        document.title = `${title} - Insight Space`;
    }), [title])
};

export default useTitle;