import { PropagateLoader } from 'react-spinners'

import { Container } from './syles'

const Loader = () => (
  <Container>
    <PropagateLoader color="#9450fc" loading size={40} speedMultiplier={0.7} />
  </Container>
)

export default Loader
