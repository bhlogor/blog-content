import { slug } from "github-slugger";
import { marked } from "marked";

// slugify
export const slugify = (content) => {
  if (!content) return null;

  return slug(content);
};

// markdownify
export const markdownify = (content, tag, className) => {
  if (!content) return null;

  const Tag = tag;
  return tag ? (
    <Tag
      className={className}
      dangerouslySetInnerHTML={{
        __html:
          tag === "div" ? marked.parse(content) : marked.parseInline(content),
      }}
    />
  ) : (
    <span
      className={className}
      dangerouslySetInnerHTML={{
        __html: marked.parseInline(content),
      }}
    />
  );
};

// humanize
export const humanize = (content) => {
  if (!content) return null;

  return content
    .replace(/^[\s_]+|[\s_]+$/g, "")
    .replace(/[_\s]+/g, " ")
    .replace(/^[a-z]/, function (m) {
      return m.toUpperCase();
    });
};


