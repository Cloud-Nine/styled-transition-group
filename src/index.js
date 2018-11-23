import styled from "styled-components/src/constructors/styled"
import animated from "./AnimatedComponent"
import construct from "./construct"
import css from "./construct/css"
import "@babel/polyfill";

export default styled(
  animated,
  construct
)

export { css }
