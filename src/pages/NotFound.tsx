import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-card to-muted overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08),transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 text-center p-8 rounded-2xl border border-border bg-card/60 backdrop-blur max-w-md"
      >
        {/* Icon */}
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: [ -10, 10, -10 ] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-destructive/20 border border-destructive/40"
        >
          <AlertTriangle className="h-7 w-7 text-destructive" />
        </motion.div>

        {/* 404 */}
        <h1 className="text-6xl font-mono font-extrabold text-primary tracking-widest mb-2">
          404
        </h1>

        {/* Message */}
        <p className="text-sm font-mono text-muted-foreground tracking-wider mb-2">
          SYSTEM ERROR — ROUTE NOT FOUND
        </p>
        <p className="text-xs text-muted-foreground mb-6">
          The requested portfolio module does not exist or has been relocated.
        </p>

        {/* Button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl border border-primary/50 bg-primary/10 px-6 py-3 text-sm font-mono text-primary hover:bg-primary/20 transition"
          >
            <Home className="h-4 w-4" />
            Return to Dhaneshvar Portfolio
          </Link>
        </motion.div>

        {/* Path info */}
        <p className="mt-6 text-xs font-mono text-muted-foreground">
          Path attempted: <span className="text-destructive">{location.pathname}</span>
        </p>
      </motion.div>
    </div>
  );
};

export default NotFound;
