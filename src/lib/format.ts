export function formatDate(date: string | Date): string {
    const d = typeof date === 'string' ? new Date(date) : date
    return new Intl.DateTimeFormat('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }).format(d)
}

export function truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength) + '...'
}

export function generateId(prefix = 'id'): string {
    return `${prefix}-${Math.random().toString(36).substring(2, 9)}`
}

export function getInitials(name: string): string {
    return name
        .split(' ')
        .map((part) => part.charAt(0))
        .join('')
        .toUpperCase()
}
