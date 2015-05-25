import Symbol from 'es-symbol'

// per instance registry of actions
export const ACTIONS_REGISTRY = Symbol()

// are we handling our own errors
export const HANDLING_ERRORS = Symbol()

// store action listeners
export const LISTENERS = Symbol()

// contains all state
export const STATE_CONTAINER = Symbol()
