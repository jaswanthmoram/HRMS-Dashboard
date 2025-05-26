import Layout from '../../components/common/Layout';
import BookmarksList from '../../components/bookmarks/BookmarksList';
// import your bookmarks list/components as needed

export default function BookmarksPage() {
  return (
    <Layout title="Bookmarks">
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">Bookmarks</h1>
        <BookmarksList />
      </div>
    </Layout>
  );
} 