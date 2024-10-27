import { Button } from "@/components/ui/button";

import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const glowAnimation = keyframes`
  0%, 100% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.6), 0 0 10px rgba(255, 255, 255, 0.4), 0 0 15px rgba(255, 255, 255, 0.2);
  }
  50% {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4);
  }
`;

const GlowButton = styled(Button)`
  animation: ${glowAnimation} 2s ease-in-out infinite;
`;

export default GlowButton;
