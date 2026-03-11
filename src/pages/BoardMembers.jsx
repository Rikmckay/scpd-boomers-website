import board from '../data/board.json';
import siteConfig from '../data/siteConfig.json';
import BoardCard from '../components/BoardCard';

export default function BoardMembers() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-2">Board Members</h1>
      <p className="text-gray-400 mb-8">{siteConfig.season} Season</p>

      <div className="mb-10">
        <h2 className="text-lg font-semibold text-gold-400 mb-4 uppercase tracking-wider">
          Elected Board
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {board.elected.map(member => (
            <BoardCard key={member.role} member={member} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gold-400 mb-4 uppercase tracking-wider">
          Appointed Board
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {board.appointed.map(member => (
            <BoardCard key={member.role} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}
