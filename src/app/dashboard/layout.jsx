export default function DashboardLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {/* No main navbar/footer here */}
                <div className="dashboard-container">
                    {children}
                </div>
            </body>
        </html>
    );
}
