import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticlesConfig from "./config/ParticlesConfig";
const ParticlesBackground = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
}, []);

return (
  <Particles
    id="tsparticles"
    init={particlesInit}
    options={ParticlesConfig}
    />
);
}

export default ParticlesBackground
