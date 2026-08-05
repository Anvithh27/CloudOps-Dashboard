import { useEffect, useState } from "react";
import Card from "../components/Card";
import api from "../services/api";

function Dashboard() {
	  const [message, setMessage] = useState("Loading...");
	  const [status, setStatus] = useState("Checking...");

	  const metrics = [
  {
    title: "Pods",
    value: "12 Running",
    icon: "☸️",
    status: "Healthy",
  },
  {
    title: "Deployments",
    value: 4,
    icon: "📦",
    status: "Healthy",
  },
  {
    title: "Services",
    value: 6,
    icon: "🌐",
    status: "Healthy",
  },
  {
    title: "Nodes",
    value: 2,
    icon: "🖥️",
    status: "Ready",
  },
];

	  useEffect(() => {
		      const fetchData = async () => {
			            try {
					            const messageResponse = await api.get("/api/message");
					            const healthResponse = await api.get("/health");

					            setMessage(messageResponse.data.message);
					            setStatus(healthResponse.data.status);
					          } catch (err) {
							          setStatus("DOWN");
							          setMessage("Unable to reach backend");
							        }
			          };

		      fetchData();
		    }, []);

	  return (
		      <>
		        <div className="cards">
		          {metrics.map((metric) => (
				            <Card
				              key={metric.title}
				              title={metric.title}
				              value={metric.value}
				            />
				          ))}
		        </div>

		        <div style={{ marginTop: "30px" }}>
		          <h2>Backend Status</h2>

		          <p>
		            <strong>Status:</strong> {status}
		          </p>

		          <p>
		            <strong>Message:</strong> {message}
		          </p>
		        </div>
		      </>
		    );
}

export default Dashboard;
