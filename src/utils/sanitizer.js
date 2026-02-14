
import DOMPurify from 'dompurify';

export const sanitizeHtml = (html) => {
    return DOMPurify.sanitize(html, {
        ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a'],
        ALLOWED_ATTR: ['href', 'target'],
    });
};

export const sanitizeText = (text) => {
    return DOMPurify.sanitize(text, {
        ALLOWED_TAGS: [], // No tags allowed for plain text
    });
};
