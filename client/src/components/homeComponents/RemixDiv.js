import React from 'react'

export default function RemixDiv({SliderData, setRemixID, remixID, part, id, objectK}) {
    const [current, setCurrent] = React.useState(0);
    const length = SliderData.length;
    const next = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }
    const prev = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }
    if (!Array.isArray(SliderData) || SliderData.length <= 0) {
        return null;
    }
    // React.useEffect(() => {
    //     console.log(current)
    // }, [current])

    const change = () => {
        // setRemixID({...remixID, [part]: current})
        // var key =`p${id.replace('page','')}`
        // console.log(id)
        // console.log( objectK)

        setRemixID({...remixID, [objectK]: {...remixID[objectK], [part]: current}})
    }
    return (
        <div className="remix__item">
        <div className="remix__wrapper">
            <div className="remix__preview">
            {SliderData.map((slide, index) => {
                        return (
                        <div
                            className={index !== current ? 'none remix-div' : 'remix-div'}
                            key={index} onClick={()=> change()}
                        >
                            {index === current && (
                            <img src={slide} className="remix__pic" alt="Preview" />
                            )}
                        </div>
                        );
                    })}
            </div>
        </div>
        <button onClick={()=> prev()} className="remix__prev">
            <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.3437 6.28606L2.02902 9.79182C1.8257 9.92495 1.59539 9.99661 1.36036 9.99988C1.12534 10.0032 0.893538 9.93792 0.687365 9.81049C0.480038 9.68228 0.306925 9.49369 0.18604 9.26433C0.0651548 9.03497 0.000913103 8.77323 0 8.50633L0 1.49483C0.000702244 1.2277 0.0648441 0.965681 0.18574 0.736067C0.306636 0.506453 0.479863 0.317653 0.687365 0.189339C0.893358 0.0620207 1.12495 -0.00315305 1.35977 0.000117281C1.59459 0.00338761 1.82469 0.0749914 2.02784 0.208007L7.34252 3.71509C7.54241 3.84534 7.70841 4.0327 7.82382 4.25836C7.93924 4.48401 8 4.74 8 5.00058C8 5.26116 7.93924 5.51714 7.82382 5.7428C7.70841 5.96845 7.54359 6.15582 7.3437 6.28606Z" fill="white"></path></svg>
        </button>
        <button onClick={()=> next()} className="remix__next">
            <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.3437 6.28606L2.02902 9.79182C1.8257 9.92495 1.59539 9.99661 1.36036 9.99988C1.12534 10.0032 0.893538 9.93792 0.687365 9.81049C0.480038 9.68228 0.306925 9.49369 0.18604 9.26433C0.0651548 9.03497 0.000913103 8.77323 0 8.50633L0 1.49483C0.000702244 1.2277 0.0648441 0.965681 0.18574 0.736067C0.306636 0.506453 0.479863 0.317653 0.687365 0.189339C0.893358 0.0620207 1.12495 -0.00315305 1.35977 0.000117281C1.59459 0.00338761 1.82469 0.0749914 2.02784 0.208007L7.34252 3.71509C7.54241 3.84534 7.70841 4.0327 7.82382 4.25836C7.93924 4.48401 8 4.74 8 5.00058C8 5.26116 7.93924 5.51714 7.82382 5.7428C7.70841 5.96845 7.54359 6.15582 7.3437 6.28606Z" fill="white"></path></svg>
        </button>
    </div>

    )
}
