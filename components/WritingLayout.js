import Head from "next/head";

export default function WritingLayout({ title, description, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <main className="blog-page">{children}</main>
    </>
  );
}
