export function getPublishYear(frontmatter) {
    return `${new Date(frontmatter.publishDate).getFullYear()}`
}

export function getPublishMonth(frontmatter) {
    const d = new Date(frontmatter.publishDate)
    const m = d.getMonth() + 1
    return m < 10 ? "0" + m : `${m}`
}

export function buildPostUrl(post) {
    if (!post?.frontmatter) {
        return null
    }
    const year = getPublishYear(post.frontmatter)
    const month = getPublishMonth(post.frontmatter)
    return `/${year}/${month}/${post.frontmatter.slug}`
}

export function arrayify(value) {
    if (!value) {
        return []
    }
    return Array.isArray(value) ? value.map((v) => v.toLowerCase()) : [value.toLowerCase()]
}

export function slugify(str) {
    return str
        .toLowerCase() // Conver to lowercase
        .replace(/[^a-z0-9 -]/g, "") // Remove all special characters
        .replace(/\s+/g, "-") // Convert spaces to dashes
}

export function aggregateMetadata(posts) {
    let category_dict = {}
    let tag_dict = {}
    posts.forEach((post) => {
        const categories = arrayify(post.frontmatter.category)
        categories.forEach((category) => {
            if (!category_dict[category]) {
                category_dict[category] = 0
            }
            category_dict[category] += 1
        })

        const tags = arrayify(post.frontmatter.tags)
        tags.forEach((tag) => {
            if (!tag_dict[tag]) {
                tag_dict[tag] = 0
            }
            tag_dict[tag] += 1
        })
    })
    const orderedCategories = Object.keys(category_dict).sort()
    const orderedTags = Object.keys(tag_dict).sort()
    return {
        categories: orderedCategories.map((category) => ({
            name: category,
            count: category_dict[category],
        })),
        tags: orderedTags.map((tag) => ({
            name: tag,
            count: tag_dict[tag],
        })),
    }
}
