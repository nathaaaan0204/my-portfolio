import React from 'react'

export const LeftBgComponent = () => {
  return (
    <div
        className="h-screen lg:w-1/2 w-0"
        style={{
          background:
            "linear-gradient(180deg, #2F2F30 0%, #31303A 55.87%, #121117 100%)",
        }}
      >
        <img
          className="pt-[100px] object-cover h-screen"
          src="public/me.jpg"
        ></img>
      </div>
  )
}
