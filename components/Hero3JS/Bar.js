import React, { useRef, useState } from 'react'
import { useSpring, a } from '@react-spring/three'

function Bar({ position }) {
  // Get direct access to the THREE.Mesh object
  const ref = useRef()
  const [active, setActive] = useState(0)
  const [hovered, hover] = useState(false)

  const { scale, rotation, color } = useSpring({
    scale: hovered ? 1.3 : 1,
    color: hovered ? '#11EA4E' : '#4F89CE',
    config: { mass: 15, tension: 999, friction: 60, precision: 0.0001 },
  })

  return (
    <a.mesh
      position={position}
      ref={ref}
      rotation-y={rotation}
      scale={scale}
      //onPointerOver={() => setActive(Number(true))}
      //onPointerOut={() => setActive(Number(false))}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} attach="geometry" />
      <a.meshStandardMaterial roughness={0.9} attach="material" color={color} />
    </a.mesh>
  )
}

export default Bar
