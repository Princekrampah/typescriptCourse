interface BlogPost {
  id: string;
  author: string;
  title: string;
  content: string;
  date: string;
  likePost: () => void;
  likeCount(): number;
  outputID: (id: string) => string;
}

// interface re-opening
interface BlogPost {
  dateDeleted?: string;
  dateUpdated: string;
}

// inheritance
interface Comments extends BlogPost {
  commentTo: string;
}

const blog_01: Comments = {
  id: "3k9Li*7t",
  author: "johnDoe",
  title: "First blog post title",
  content: "First blog post content",
  date: "20/11/2023",
  likePost: () => {
    console.log("Liked post");
  },
  likeCount: () => {
    return 3;
  },
  outputID: (id: string) => {
    return id;
  },
  dateUpdated: "20/11/2023",
  commentTo: "u979Tx3jl",
};
