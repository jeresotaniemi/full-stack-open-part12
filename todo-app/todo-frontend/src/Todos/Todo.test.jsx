import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import Todo from './Todo'

test('renders todo text and buttons', () => {
    const todo = {_id: '1', text: 'Test todo', done: false }
    
    render(<Todo todo={todo} />)
    expect(screen.getByText('Test todo')).toBeDefined()
    expect(screen.getByText('This todo is not done')).toBeDefined()
    expect(screen.getByText('Delete')).toBeDefined()
    expect(screen.getByText('Set as done')).toBeDefined()
})