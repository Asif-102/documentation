import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByCategory } from "@/utils/doc-util";

export function generateStaticParams() {
  const docs = getDocuments();

  return docs.map((doc) => ({
    name: doc.category,
  }));
}

export default function CategoriesPage({ params: { name } }) {
  const docs = getDocuments();
  const matchedDocs = getDocumentsByCategory(docs, name);

  return <ContentDisplay id={matchedDocs[0].id} />;
}
