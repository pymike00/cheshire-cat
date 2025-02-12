import { type JSXElementConstructor, type ReactNode } from 'react'

/**
 * Defines a shared interface for specifying the properties that are ubiquitous across all components.
 * This interface serves as a standardized blueprint for defining and validating component props.
 *
 * Basic Usage:
 *
 * export interface MyComponentProps extends CommonProps {
 *  // ... other props
 * }
 */
export interface CommonProps {
  className?: string
  children?: ReactNode
}

/**
 * Defines a generic component constructor (class or function) that can be used to render a component.
 * The purpose of this type is to help define the props of components that involve other components (allow components injection).
 * ComponentRenderer is a generic type, it allows for the definition of the prop type that the renderer can receive.
 *
 * Basic Usage:
 *
 * export interface MyComponentProps {
 *   HeaderRenderer: ComponentRenderer<{ title: string }>
 * }
 */
export type ComponentRenderer<TProps = Record<string, unknown>> = JSXElementConstructor<TProps> | string

/**
 * Defines a generic interface for defining the state of an asynchronous operation.
 */
export interface AsyncStateBase {
  loading: boolean
  error?: string
}

/**
 * Defines a generic interface for defining the state of an asynchronous operation that returns data.
 */
export interface AsyncState<TData> extends AsyncStateBase {
  data?: TData
}
