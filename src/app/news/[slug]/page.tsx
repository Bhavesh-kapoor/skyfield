"use client";

import HeroSection from "@/components/home/HeroSection";
import { getBlogData, getBlogSlugData, getNewsSlugData, SectionData } from "@/utils/server";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import dayjs from "dayjs";
import DOMPurify from "dompurify";
import Blogs from "@/components/blogs/Blog";

const page = () => {
  const { slug } = useParams(); // ✅ Get slug from dynamic route
  const [loadingBlogList, setLoadingBlogList] = useState(true);
  const [loading, setLoading] = useState();
  const [blogPageData, setBlogPageData] = useState<any>();
  const [blog, setBlog] = useState<any>(null);
  useEffect(() => {
    const fetchBlog = async () => {
      const { loading, blogPageData }: any = await getBlogData();
      // console.log(blogPageData);
      setBlogPageData(blogPageData[0]);
      if (loading) {
        setLoading(loading);
      }
    };
    fetchBlog();
  }, []);

  useEffect(() => {
    if (!slug) return;
console.log(slug)
    const fetchBlog = async () => {
      try {
        setLoadingBlogList(true);
        const { newsPageSlugData } = await getNewsSlugData(slug);
        // console.log(blogPageSlugData);
        setBlog(newsPageSlugData?.[0]);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoadingBlogList(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loadingBlogList) return <p>Loading...</p>;
  if (!blog) return <p>No blog found.</p>;

  const cleanHTML = DOMPurify.sanitize(blog?.content); // Sanitize HTML

  const data = {
    title: "Blog",
    description:
      "  SkyField, powered by Vanguard Systems Ltd., is your one-stop solution for Unmanned Systems Forces. We offer a comprehensive range of products and services designed to enhance the capabilities and effectiveness of your unmanned systems operations. SkyField is committed to fulfilling the evolving needs of Unmanned Systems Forces. We specialize in developing and manufacturing a comprehensive range of solutions, from extending the operator's reach beyond the frontlines to providing real-time situational awareness and advanced counter-UAS  capabilities.",
    video: "/videos/heroSection.mp4",
    link: "/",
  };
  return (
    <div className="bg-gray-50">
      {blogPageData && (
        <HeroSection
          title={blogPageData?.title || data.title}
          description={blogPageData?.description || data.description}
          link={blogPageData?.link || data.link}
          video={blogPageData?.videoUrl}
        />
      )}
      <div className="max-w-7xl lg:max-w-6xl m-auto p-4 lg:py-24">
        <div className="mb-16">
          <Image
            src={
              blog?.image
                ? `${process.env.NEXT_PUBLIC_API_URL}/${blog?.image
                    .replace(/\\/g, "/")
                    .replace(/^\/+/, "")}` // Handle backslashes and forward slashes
                : "/images/droneArmy.png" // Fallback image if no cover image
            }
            width={5000}
            height={3000}
            alt="Blog Banner"
            className="w-full h-80 object-cover rounded-lg"
          />
          <h1 className="text-4xl font-bold text-gray-800 mt-6">
            {blog?.title || "Blog Title"}
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            By{" "}
            <span className="font-semibold">
              {blog?.author || "Author Name"}
            </span>{" "}
            | Published on{" "}
            <span className="font-semibold">
              {dayjs(blog?.date).format("DD/MM/YYYY")}
            </span>
          </p>
        </div>

        <div className="text-gray-700 leading-8">
          <p
            dangerouslySetInnerHTML={{ __html: cleanHTML }}
            className="prose max-w-none"
          ></p>
        </div>

        {/* <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800">Comments</h3>
          <div className="mt-4">
            {<div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold">User Name</p>
              <p className="text-gray-600">
                This is a sample comment on the blog post.
              </p>
            </div>}
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="font-semibold">Another User</p>
              <p className="text-gray-600">
                Interesting insights! Thanks for sharing.
              </p>
            </div>
          </div>
        </div> */}

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800">Latest Blogs</h3>
          <Blogs />
        </div>
      </div>
    </div>
  );
};

export default page;
