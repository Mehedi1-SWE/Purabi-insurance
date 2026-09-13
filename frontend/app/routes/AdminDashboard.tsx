import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

type Blog = {
    _id: string;
    title: string;
    category: string;
    author: string;
    createdAt: string;
};

type Contact = {
    _id: string;
    fullName: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    createdAt: string;
};

export default function AdminDashboard() {
    const navigate = useNavigate();

    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("adminToken");

        if (!token) {
            navigate("/admin-login");
            return;
        }

        fetchBlogs();
        fetchContacts();
    }, [navigate]);

    const fetchBlogs = async () => {
        try {
            const response = await fetch(
                "http://localhost:5000/api/blogs"
            );

            const result = await response.json();

            if (response.ok && result.success) {
                setBlogs(result.data);
            }
        } catch (error) {
            console.error("Dashboard error:", error);
        } finally {
            setLoading(false);
        }
    };

    const fetchContacts = async () => {
        try {
            const response = await fetch(
                "http://localhost:5000/api/contact"
            );

            const result = await response.json();

            if (response.ok && result.success) {
                setContacts(result.data);
            }
        } catch (error) {
            console.error("Contact messages error:", error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("adminToken");
        navigate("/admin-login");
    };

    const recentBlogs = [...blogs]
        .sort(
            (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
        )
        .slice(0, 5);

    const recentContacts = contacts.slice(0, 5);

    return (
        <div className="mx-auto min-h-screen w-[1440px] bg-[#faf8f7] font-['Poppins'] text-[#444]">
            <div className="px-[80px] py-[60px]">

                {/* Header */}
                <div className="rounded-[24px] border border-[#eee3df] bg-white px-8 py-7 shadow-[0_8px_35px_rgba(68,68,68,0.05)]">
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div>
                            <div className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-[#AC3E25]" />
                                <p className="text-[11px] font-medium uppercase tracking-[2px] text-[#AC3E25]">
                                    Purabi General Insurance
                                </p>
                            </div>

                            <h1 className="mt-3 text-[32px] font-semibold leading-[1.2] tracking-[-0.8px] text-[#333] lg:text-[38px]">
                                Welcome Back
                            </h1>

                            <p className="mt-2 text-[13px] leading-[1.7] text-[#888] lg:text-[14px]">
                                Manage your website content and customer
                                enquiries from one place.
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={handleLogout}
                            className="h-[46px] w-fit rounded-[6px] border border-[#ead7d1] bg-white px-6 text-[12px] font-medium text-[#AC3E25] transition duration-300 hover:bg-[#AC3E25] hover:text-white"
                        >
                            Logout
                        </button>
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-[30px] grid grid-cols-1 gap-5 md:grid-cols-3">

                    {/* Published Articles */}
                    <div className="rounded-[20px] border border-[#eee3df] bg-white p-6 shadow-[0_8px_30px_rgba(68,68,68,0.04)]">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-[10px] font-medium uppercase tracking-[1.5px] text-[#999]">
                                    Published Articles
                                </p>

                                <h2 className="mt-3 text-[38px] font-semibold leading-none text-[#333]">
                                    {loading ? "—" : blogs.length}
                                </h2>
                            </div>

                            <div className="flex h-[46px] w-[46px] items-center justify-center rounded-[8px] bg-[#faf0ed] text-[16px] font-semibold text-[#AC3E25]">
                                B
                            </div>
                        </div>

                        <p className="mt-5 text-[11px] leading-[1.6] text-[#999]">
                            Articles currently available on your website.
                        </p>
                    </div>

                    {/* Customer Enquiries */}
                    <div className="rounded-[20px] border border-[#eee3df] bg-white p-6 shadow-[0_8px_30px_rgba(68,68,68,0.04)]">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-[10px] font-medium uppercase tracking-[1.5px] text-[#999]">
                                    Customer Enquiries
                                </p>

                                <h2 className="mt-3 text-[38px] font-semibold leading-none text-[#333]">
                                    {loading ? "—" : contacts.length}
                                </h2>
                            </div>

                            <div className="flex h-[46px] w-[46px] items-center justify-center rounded-[8px] bg-[#faf0ed] text-[16px] font-semibold text-[#AC3E25]">
                                M
                            </div>
                        </div>

                        <p className="mt-5 text-[11px] leading-[1.6] text-[#999]">
                            Questions and requests from your customers.
                        </p>
                    </div>

                    {/* Quick Access */}
                    <div className="rounded-[20px] bg-[#AC3E25] p-6 text-white shadow-[0_12px_35px_rgba(172,62,37,0.16)]">
                        <p className="text-[10px] font-medium uppercase tracking-[1.5px] text-white/60">
                            Quick Access
                        </p>

                        <h2 className="mt-3 text-[22px] font-semibold leading-[1.3]">
                            Share something new
                        </h2>

                        <p className="mt-2 text-[11px] leading-[1.6] text-white/70">
                            Create a new article for your customers.
                        </p>

                        <Link
                            to="/add-blog"
                            className="mt-5 inline-flex h-[42px] items-center justify-center rounded-[6px] bg-white px-5 text-[11px] font-medium text-[#AC3E25] transition duration-300 hover:bg-[#f8f8f8]"
                        >
                            + Add New Article
                        </Link>
                    </div>
                </div>

                {/* Recent Articles */}
                <div className="mt-[30px] overflow-hidden rounded-[20px] border border-[#eee3df] bg-white shadow-[0_8px_30px_rgba(68,68,68,0.04)]">
                    <div className="flex flex-col gap-4 border-b border-[#eee] px-7 py-6 md:flex-row md:items-center md:justify-between">
                        <div>
                            <p className="text-[10px] font-medium uppercase tracking-[1.6px] text-[#AC3E25]">
                                Content
                            </p>

                            <h2 className="mt-2 text-[21px] font-semibold text-[#333]">
                                Latest Articles
                            </h2>

                            <p className="mt-1 text-[12px] text-[#999]">
                                Recently published content from your website.
                            </p>
                        </div>

                        <Link
                            to="/blog-management"
                            className="w-fit text-[11px] font-medium text-[#AC3E25] hover:underline"
                        >
                            View All Articles →
                        </Link>
                    </div>

                    {loading ? (
                        <div className="px-7 py-12 text-center text-[13px] text-[#888]">
                            Loading articles...
                        </div>
                    ) : recentBlogs.length === 0 ? (
                        <div className="px-7 py-12 text-center">
                            <p className="text-[13px] text-[#777]">
                                No articles have been published yet.
                            </p>

                            <Link
                                to="/add-blog"
                                className="mt-4 inline-flex rounded-[6px] bg-[#AC3E25] px-5 py-3 text-[11px] font-medium text-white hover:bg-[#96351F]"
                            >
                                Create First Article
                            </Link>
                        </div>
                    ) : (
                        <div>
                            {recentBlogs.map((blog, index) => (
                                <div
                                    key={blog._id}
                                    className={`flex flex-col gap-4 px-7 py-5 transition duration-200 hover:bg-[#fcfaf9] md:flex-row md:items-center md:justify-between ${index !== recentBlogs.length - 1
                                        ? "border-b border-[#eee]"
                                        : ""
                                        }`}
                                >
                                    <div className="min-w-0">
                                        <div className="flex flex-wrap items-center gap-3">
                                            <span className="rounded-full bg-[#faf0ed] px-3 py-1 text-[9px] font-medium uppercase tracking-[1px] text-[#AC3E25]">
                                                {blog.category}
                                            </span>

                                            <span className="text-[10px] text-[#aaa]">
                                                {new Date(
                                                    blog.createdAt
                                                ).toLocaleDateString(
                                                    "en-US",
                                                    {
                                                        month: "short",
                                                        day: "numeric",
                                                        year: "numeric",
                                                    }
                                                )}
                                            </span>
                                        </div>

                                        <h3 className="mt-2 truncate text-[14px] font-medium text-[#444]">
                                            {blog.title}
                                        </h3>

                                        <p className="mt-1 text-[10px] text-[#999]">
                                            Published by {blog.author}
                                        </p>
                                    </div>

                                    <Link
                                        to={`/blogs/${blog._id}`}
                                        className="w-fit shrink-0 rounded-[6px] border border-[#ead7d1] px-4 py-2.5 text-[10px] font-medium text-[#AC3E25] transition duration-300 hover:bg-[#AC3E25] hover:text-white"
                                    >
                                        View Article
                                    </Link>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Customer Enquiries */}
                <div className="mt-[30px] overflow-hidden rounded-[20px] border border-[#eee3df] bg-white shadow-[0_8px_30px_rgba(68,68,68,0.04)]">
                    <div className="flex flex-col gap-4 border-b border-[#eee] px-7 py-6 md:flex-row md:items-center md:justify-between">
                        <div>
                            <p className="text-[10px] font-medium uppercase tracking-[1.6px] text-[#AC3E25]">
                                Customer Support
                            </p>

                            <h2 className="mt-2 text-[21px] font-semibold text-[#333]">
                                Recent Enquiries
                            </h2>

                            <p className="mt-1 text-[12px] text-[#999]">
                                See what your customers are asking about.
                            </p>
                        </div>

                        <span className="w-fit rounded-full bg-[#faf0ed] px-4 py-2 text-[10px] font-medium text-[#AC3E25]">
                            {contacts.length} Enquiries
                        </span>
                    </div>

                    {recentContacts.length === 0 ? (
                        <div className="px-7 py-12 text-center text-[13px] text-[#777]">
                            No customer enquiries yet.
                        </div>
                    ) : (
                        <div>
                            {recentContacts.map((contact, index) => (
                                <details
                                    key={contact._id}
                                    className={`group px-7 py-6 transition duration-200 hover:bg-[#fcfaf9] ${index !== recentContacts.length - 1
                                        ? "border-b border-[#eee]"
                                        : ""
                                        }`}
                                >
                                    <summary className="flex cursor-pointer list-none flex-col gap-4 md:flex-row md:items-center md:justify-between">
                                        <div className="min-w-0">
                                            <div className="flex items-center gap-3">
                                                <h3 className="text-[15px] font-semibold text-[#3d3d3d]">
                                                    {contact.fullName}
                                                </h3>

                                                <span className="rounded-full bg-[#faf0ed] px-2.5 py-1 text-[9px] font-medium text-[#AC3E25]">
                                                    View Message
                                                </span>
                                            </div>

                                            <p className="mt-1 text-[13px] leading-[1.7] text-[#777]">
                                                {contact.email} · {contact.phone}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <span className="w-fit rounded-full bg-[#faf0ed] px-3 py-1 text-[9px] font-medium uppercase tracking-[1px] text-[#AC3E25]">
                                                {contact.subject}
                                            </span>

                                            <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-[#ead7d1] text-[14px] text-[#AC3E25] transition duration-300 group-open:rotate-180">
                                                ↓
                                            </span>
                                        </div>
                                    </summary>

                                    <div className="mt-5 rounded-[12px] border border-[#eee3df] bg-[#fcfbfa] px-6 py-5">
                                        <p className="text-[12px] font-medium uppercase tracking-[1.2px] text-[#AC3E25]">
                                            Customer Message
                                        </p>

                                        <p className="mt-3 whitespace-pre-wrap break-words text-[15px] font-normal leading-[2] tracking-[0.1px] text-[#4f4f4f]">
                                            {contact.message}
                                        </p>
                                    </div>
                                </details>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="py-8 text-center">
                    <p className="text-[10px] text-[#aaa]">
                        Purabi General Insurance Co. Ltd. · Administration Portal
                    </p>
                </div>
            </div>
        </div>
    );
}
