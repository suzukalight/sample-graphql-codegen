type PostData = matter.GrayMatterFile<string> & {
  date: string;
  title: string;
  id?: string;
  contentHtml?: string;
};
