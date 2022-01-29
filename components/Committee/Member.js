import React from 'react'

const Member = ({ name, title, img }) => {
  return (
    <div class="mb-16">
      <div class="mb-2">
        <img
          src="data:image/jpeg;base64,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"
          class="h-36 w-36 rounded-full"
        />
      </div>
      <h2 class="text-white font-raleway font-bold text-lg text-center">
        {name}
      </h2>
      <h3 class="text-blue-200 font-raleway text-base text-center">
        {title ? title : 'Committee Member'}
      </h3>
    </div>
  )
}

export default Member